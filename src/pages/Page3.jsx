import './Page.css'
import Header from '../Header'
import array1 from '../assets/array1.png'

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page3() {

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
            navigate('/4?step=0');
        if (step < 0)
            navigate('/2?step=7');
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
            <Header title='一維陣列' />
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
                        <li className={showStatus(1)}>陣列可以用來儲存一系列的數字 <br />
                            <img src={array1} alt='陣列範例' />
                        </li>
                        <li className={showStatus(2)}>建立一個大小為5的陣列a<br />
                            <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                {"int a[5];"}
                            </SyntaxHighlighter>
                        </li>
                        <li className={showStatus(3)}>建立一個有45, 55, 2025的陣列<br />
                            <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                {"short y[] = {45, 55, 2025};"}
                            </SyntaxHighlighter>
                        </li>
                        <li className={showStatus(4)}>當開的大小比大括號內的元素個數還少時，剩餘的元素會自動為0<br />
                            <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                {"char c[6] = {1, 2, 3};"}
                            </SyntaxHighlighter>
                            <ul>
                                <li className={showStatus(4)}>實際陣列中的值為1, 2, 3, 0, 0, 0</li>
                            </ul>
                        </li>
                        <li className={showStatus(5)}>存取元素
                            <ul>
                                <li className={showStatus(6)}>存取第1個元素(索引值從0開始)
                                    <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                        {"y[1]  // 得到55"}
                                    </SyntaxHighlighter>
                                </li>
                                <li className={showStatus(7)}>可以將其它變數設為陣列某個元素的值
                                    <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                        {"int x = c[2]; // x的值會被設為3"}
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

export default Page3;