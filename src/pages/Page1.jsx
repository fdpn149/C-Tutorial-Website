import './Page.css'
import './Page1.css'
import Header from '../Header'

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function Page1() {

    const maxStep = 6;
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams({ step: 0 });
    const step = parseInt(searchParams.get('step') || 0);

    useEffect(() => {
        const handleKeydown = (e) => {
            switch (e.key) {
                case 'ArrowLeft': stepSub(); break;
                case 'ArrowRight': stepAdd(); break;
            }
        }
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        };
    }, [step, setSearchParams]);

    useEffect(() => {
        if (step > maxStep)
            navigate('/2?step=0');
    }, [searchParams]);

    function showStatus(index) {
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'  // 平滑捲動
            });
        }, 100);
        return step >= index ? "show" : "hidden";
    }

    function stepAdd() {
        if (step <= maxStep)
            setSearchParams({ step: step + 1 });
        else
            setSearchParams((prevParams) => { return prevParams; });
    }


    function stepSub() {
        if (step > 0)
            setSearchParams({ step: step - 1 });
        else
            setSearchParams((prevParams) => { return prevParams; });
    }

    return (
        <>
            <div className='black-screen'>
                <div className='fadein'>
                    <Header title='基本整數資料型態' />
                    <div className='page'>
                        <div className='content'>
                            <ul>
                                <li className={showStatus(1)}>分為「有號數(含負數)」與「無號數」兩種</li>
                            </ul>
                            <div className='box'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th className={showStatus(2)}>範圍(2ᴺ)</th>
                                            <th className={showStatus(2)}>範圍(數值)</th>
                                            <th className={showStatus(3)}>類型</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={showStatus(2)}>0~2⁸-1</td>
                                            <td className={showStatus(2)}>0~255</td>
                                            <td className={showStatus(3)}>unsigned char</td>
                                        </tr>
                                        <tr>
                                            <td className={showStatus(2)}>0~2¹⁶-1</td>
                                            <td className={showStatus(2)}>0~65535</td>
                                            <td className={showStatus(3)}>unsigned short</td>
                                        </tr>
                                        <tr>
                                            <td className={showStatus(2)}>0~2³²-1</td>
                                            <td className={showStatus(2)}>0~4294967295</td>
                                            <td className={showStatus(3)}>unsigned int</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className={showStatus(4)}>範圍(2ᴺ)</th>
                                            <th className={showStatus(4)}>範圍(數值)</th>
                                            <th className={showStatus(5)}>類型</th>
                                            <th className={showStatus(6)}>簡寫</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={showStatus(4)}>-2⁷~2⁷-1</td>
                                            <td className={showStatus(4)}>-128~127</td>
                                            <td className={showStatus(5)}>signed char</td>
                                            <td className={showStatus(6)}>char</td>
                                        </tr>
                                        <tr>
                                            <td className={showStatus(4)}>-2¹⁵~2¹⁵-1</td>
                                            <td className={showStatus(4)}>-32768~32767</td>
                                            <td className={showStatus(5)}>signed short</td>
                                            <td className={showStatus(6)}>short</td>
                                        </tr>
                                        <tr>
                                            <td className={showStatus(4)}>-2³¹~2³¹-1</td>
                                            <td className={showStatus(4)}>-2147483648~2147483647</td>
                                            <td className={showStatus(5)}>signed int</td>
                                            <td className={showStatus(6)}>int</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <ul>
                                <li className={showStatus(6)}>signed修飾符通常會直接省略</li>
                            </ul>
                        </div>
                    </div>
                    <button className='prev_btn' onClick={stepSub} />
                    <button className='next_btn' onClick={stepAdd} />
                </div>
            </div>
        </>
    );
}

export default Page1;