import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page6() {

    const maxStep = 18;
    const { step, stepAdd, stepSub } = useStep(maxStep, 6);

    return (
        <>
            <Page title='輸入輸出' stepAdd={stepAdd} stepSub={stepSub}>
                <ul>
                    <li className={showStatus(step, 1)}>文字輸出
                        <ul>
                            <li>使用printf的function
                                <ul>
                                    <li>f為format(格式)的意思</li>
                                </ul>
                            </li>
                            <li className={showStatus(step, 2)}>語法為<br />
                                <code>printf("「輸出的格式」", 「所有『輸出的格式』中提到的變數」);</code>
                            </li>
                            <li className={showStatus(step, 3)}>輸出的格式可以為
                                <ul>
                                    <li className={showStatus(step, 4)}>文字
                                        <ul>
                                            <li>直接打就可以</li>
                                        </ul>
                                    </li>
                                    <li className={showStatus(step, 5)}>int
                                        <ul>
                                            <li>寫法為%d</li>
                                        </ul>
                                    </li>
                                    <li className={showStatus(step, 6)}>char
                                        <ul>
                                            <li>寫法為%c</li>
                                        </ul>
                                    </li>
                                    <li className={showStatus(step, 7)}>unsigned int
                                        <ul>
                                            <li>寫法為%u</li>
                                        </ul>
                                    </li>
                                    <li className={showStatus(step, 8)}>字串
                                        <ul>
                                            <li>寫法為%s</li>
                                            <li>會從開頭位置的字元印到\0前的那一個字元</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={showStatus(step, 9)}>舉例
                                <ul>
                                    <li className={showStatus(step, 10)}>
                                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                            {"printf(\"Test\"); // 會輸出「Test」"}
                                        </SyntaxHighlighter>
                                    </li>
                                    <li className={showStatus(step, 11)}>
                                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                            {"int num = 8192;\nprintf(\"%d\", num); // 會輸出「8192」"}
                                        </SyntaxHighlighter>
                                    </li>
                                    <li className={showStatus(step, 12)}>
                                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                            {"int year = '2025';\nint month = 1;\nchar c = '/';\nint day = 2;\nprintf(\"Today is %d %d%c%d\", year, month, c, day); // 會輸出「Today is 2025 1/2」"}
                                        </SyntaxHighlighter>
                                    </li>
                                    <li className={showStatus(step, 13)}>
                                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                            {"char str[] = \"You are handsome!\";\nprintf(\"%s\", str); // 會輸出「You are handsome!」"}
                                        </SyntaxHighlighter>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={showStatus(step, 14)}>文字輸入
                        <ul>
                            <li>使用scanf的function
                                <ul>
                                    <li>f為format(格式)的意思</li>
                                </ul>
                            </li>
                            <li>語法為<br />
                                <code>scanf("「輸入的格式」", 「<span style={{ color: 'red' }}>&</span>所有『輸入的格式』中提到的變數」);</code>
                            </li>
                            <li>輸入的格式可以為
                                <ul>
                                    <li>int
                                        <ul>
                                            <li>寫法為%d</li>
                                        </ul>
                                    </li>
                                    <li>char
                                        <ul>
                                            <li>寫法為%c</li>
                                        </ul>
                                    </li>
                                    <li>unsigned int
                                        <ul>
                                            <li>寫法為%u</li>
                                        </ul>
                                    </li>
                                    <li>字串
                                        <ul>
                                            <li>寫法為%s</li>
                                            <li>不用加&</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={showStatus(step, 15)}>舉例
                                <ul>
                                    <li className={showStatus(step, 16)}>
                                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                            {"int a;\nscanf(\"%d\", &a); // 當輸入「123」，a的值會被設為「123」"}
                                        </SyntaxHighlighter>
                                    </li>
                                    <li className={showStatus(step, 17)}>
                                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                            {"int a;\nint b;\nscanf(\"%d %d\", &a, &b); // 當輸入「2025 0102」，a的值會被設為「2025」，b的值會被設為「102」"}
                                        </SyntaxHighlighter>
                                    </li>
                                    <li className={showStatus(step, 18)}>
                                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                            {"char c[20];\nscanf(\"%s\", c); // 當輸入「Victory」，c的值會被設為「Victory\\0」"}
                                        </SyntaxHighlighter>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Page>
        </>
    );
}

export default Page6;