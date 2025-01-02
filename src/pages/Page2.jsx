import './Page.css'
import Header from '../Header'

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page2() {

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
            navigate('/3?step=0');
        if (step < 0)
            navigate('/1?step=6');
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
            <Header title='定義宣告變數' />
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
                        <li className={showStatus(1)}>宣告方式<br />
                            <code className={showStatus(2)}>「變數型態」 「變數名稱」 = 「值」;</code>
                        </li>
                        <li className={showStatus(3)}>舉例來說<br />
                            <SyntaxHighlighter className={"codeBlock " + showStatus(4)} language='c' style={tomorrow}>
                                char c = 65;
                            </SyntaxHighlighter>
                            <SyntaxHighlighter className={"codeBlock " + showStatus(5)} language='c' style={tomorrow}>
                                unsigned int i = 2187;
                            </SyntaxHighlighter>
                        </li>
                        <li className={showStatus(6)}>更改變數的值<br />
                            <ul>
                                <li className={showStatus(7)}>將i的值改為19683
                                    <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                        {"i = 19683;"}
                                    </SyntaxHighlighter>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <button className='prev_btn' onClick={stepSub} />
            <button className='next_btn' onClick={stepAdd} />
        </>
    );
}

export default Page2;