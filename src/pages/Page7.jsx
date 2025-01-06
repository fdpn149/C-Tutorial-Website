import './Page.css'
import Header from '../Header'

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page6() {

    const maxStep = 5;
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
            navigate('/7?step=5');
        if (step < 0)
            navigate('/6?step=18');
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
            <Header title='函式' />
            <div className='page'>
                <div className='content'>
                    <ul>
                        <li className={showStatus(1)}>數學的函數是這樣寫的
                            <ul>
                                <li>cos(0) = 1</li>
                                <li className={showStatus(2)}>所以當寫cos(0)，就可以知道它的值是1</li>
                                <li className={showStatus(3)}>程式的函式也是類似的概念</li>
                            </ul>
                        </li>
                        <li className={showStatus(4)}>C的函式定義為<br />
                            <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                {"\t回傳類型 函式名稱 (參數1類型 參數1名稱, 參數2類型 參數2名稱, ......)\n\t{\n\t\t內容\n\t\treturn 回傳值;\n\t}"}
                            </SyntaxHighlighter>
                            <ul>
                                <li>回傳類型若為void，則「return回傳值」可省略</li>
                                <li>若不需使用參數，則參數的部分可省略</li>
                            </ul>
                        </li>
                        <li className={showStatus(5)}>可以寫一個簡單的函式如下<br />
                            <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                {"int bmi(int weight, int height)\n{\n\tint val = weight / (height / 100.0 * height / 100.0);\n\treturn val;\n}"}
                            </SyntaxHighlighter>
                            <ul>
                                <li>使用的時候可以直接這樣寫<br />
                                    <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                        {"bmi(49,158);"}
                                    </SyntaxHighlighter>
                                </li>
                                <li>可以得到值為19</li>
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

export default Page6;