import './Page.css'
import Header from '../Header'

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page4() {

    const maxStep = 7;
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
            navigate('/5?step=0');
        if (step < 0)
            navigate('/3?step=7');
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
        if (step >= 0)
            setSearchParams({ step: step - 1 });
        else
            setSearchParams((prevParams) => { return prevParams; });
    }

    return (
        <>
            <Header title='字元資料型態' />
            <div className='page'>
                <div className='content'>
                    <div className='box'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>範圍(2ᴺ)</th>
                                    <th>範圍(數值)</th>
                                    <th>類型</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0~2⁸-1</td>
                                    <td>0~255</td>
                                    <td>unsigned char</td>
                                </tr>
                                <tr>
                                    <td>0~2¹⁶-1</td>
                                    <td>0~65535</td>
                                    <td>unsigned short</td>
                                </tr>
                                <tr>
                                    <td>0~2³²-1</td>
                                    <td>0~4294967295</td>
                                    <td>unsigned int</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <th>範圍(2ᴺ)</th>
                                    <th>範圍(數值)</th>
                                    <th>類型</th>
                                    <th>簡寫</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>-2⁷~2⁷-1</td>
                                    <td>-128~127</td>
                                    <td>signed char</td>
                                    <td>char</td>
                                </tr>
                                <tr>
                                    <td>-2¹⁵~2¹⁵-1</td>
                                    <td>-32768~32767</td>
                                    <td>signed short</td>
                                    <td>short</td>
                                </tr>
                                <tr>
                                    <td>-2³¹~2³¹-1</td>
                                    <td>-2147483648~2147483647</td>
                                    <td>signed int</td>
                                    <td>int</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul>
                        <li className={showStatus(1)}>char型態除了可以視為能儲存-128~127的數值，也視為儲存1個字元</li>
                        <li className={showStatus(2)}>建立一個儲存字元'A'的變數
                            <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                {"char c = 'A';"}
                            </SyntaxHighlighter>
                            <ul>
                                <li className={showStatus(3)}>其實c存的值是65</li>
                            </ul>
                        </li>
                        <li className={showStatus(4)}>字元陣列
                            <ul>
                                <li className={showStatus(4)}>寫法與先前提的寫法是一樣的
                                    <SyntaxHighlighter className={"codeBlock " + showStatus(5)} language='c' style={tomorrow}>
                                        {"char str[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\\n'};"}
                                    </SyntaxHighlighter>
                                </li>
                                <li className={showStatus(6)}>不過C語言有提供一種專門給字元陣列的特殊寫法
                                    <SyntaxHighlighter className={"codeBlock " + showStatus(7)} language='c' style={tomorrow}>
                                        {"char str[] = \"Hello World!\\n\";"}
                                    </SyntaxHighlighter>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div >
            <button className='prev_btn' onClick={stepSub} />
            <button className='next_btn' onClick={stepAdd} />
        </>
    );
}

export default Page4;