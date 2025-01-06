import './Page.css'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page2() {

    const maxStep = 7;
    const { step, stepAdd, stepSub } = useStep(maxStep, 2);

    return (
        <>
            <Page title='定義宣告變數' stepAdd={stepAdd} stepSub={stepSub}>
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
                    <li className={showStatus(step, 1)}>宣告方式<br />
                        <code className={showStatus(step, 2)}>「變數型態」 「變數名稱」 = 「值」;</code>
                    </li>
                    <li className={showStatus(step, 3)}>舉例來說<br />
                        <SyntaxHighlighter className={"codeBlock " + showStatus(step, 4)} language='c' style={tomorrow}>
                            char c = 65;
                        </SyntaxHighlighter>
                        <SyntaxHighlighter className={"codeBlock " + showStatus(step, 5)} language='c' style={tomorrow}>
                            unsigned int i = 2187;
                        </SyntaxHighlighter>
                    </li>
                    <li className={showStatus(step, 6)}>更改變數的值<br />
                        <ul>
                            <li className={showStatus(step, 7)}>將i的值改為19683
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {"i = 19683;"}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Page>
        </>
    );
}

export default Page2;