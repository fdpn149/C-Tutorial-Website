import './Page.css'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page4() {

    const maxStep = 7;
    const { step, stepAdd, stepSub } = useStep(maxStep, 4);

    return (
        <>
            <Page title='字元資料型態' stepAdd={stepAdd} stepSub={stepSub}>
                <div className='box'>
                    <table className='table' rules='cols'>
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
                    <table rules='cols'>
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
                    <li className={showStatus(step, 1)}>char型態除了可以視為能儲存-128~127的數值，也視為儲存1個字元</li>
                    <li className={showStatus(step, 2)}>建立一個儲存字元'A'的變數
                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                            {"char c = 'A';"}
                        </SyntaxHighlighter>
                        <ul>
                            <li className={showStatus(step, 3)}>其實c存的值是65</li>
                        </ul>
                    </li>
                    <li className={showStatus(step, 4)}>字元陣列
                        <ul>
                            <li className={showStatus(step, 4)}>寫法與先前提的寫法是一樣的
                                <SyntaxHighlighter className={"codeBlock " + showStatus(step, 5)} language='c' style={tomorrow}>
                                    {"char str[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\\n'};"}
                                </SyntaxHighlighter>
                            </li>
                            <li className={showStatus(step, 6)}>不過C語言有提供一種專門給字元陣列的特殊寫法
                                <SyntaxHighlighter className={"codeBlock " + showStatus(step, 7)} language='c' style={tomorrow}>
                                    {"char str[] = \"Hello World!\\n\";"}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Page>
        </>
    );
}

export default Page4;