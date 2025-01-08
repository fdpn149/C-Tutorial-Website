import memory1 from '../assets/memory1.png'
import memory2 from '../assets/memory2.png'
import memory3 from '../assets/memory3.png'
import memory4 from '../assets/memory4.png'
import memory5 from '../assets/memory5.png'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page5() {

    const maxStep = 16;
    const { step, stepAdd, stepSub } = useStep(maxStep, 5);

    return (
        <>
            <Page title='變數的儲存' stepAdd={stepAdd} stepSub={stepSub}>
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
                    <li className={showStatus(step, 1)}>大小：<br />{"char：1 byte"}<br />{"short：2 bytes"}<br />{"int：4 bytes"}</li>
                    <li className={showStatus(step, 2)}>當定義了一個int a
                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                            {"int a = 5;"}
                        </SyntaxHighlighter>
                        <ul>
                            <li className={showStatus(step, 2)}>會在記憶體的4個bytes中存這個變數的值
                                <img className={showStatus(step, 3)} src={memory1} alt="原始記憶體" />
                                <p className={showStatus(step, 3)}>變為</p>
                                <img className={showStatus(step, 4)} src={memory2} alt="存變數a後的記憶體" />
                            </li>
                            <li className={showStatus(step, 4)}>a的值是5</li>
                        </ul>
                    </li>
                    <li className={showStatus(step, 5)}>當定義了一個字元c
                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                            {"char c = 'A';"}
                        </SyntaxHighlighter>
                        <ul>
                            <li className={showStatus(step, 5)}>會在記憶體的1個byte中存這個變數的值
                                <img className={showStatus(step, 6)} src={memory1} alt="原始記憶體" />
                                <p className={showStatus(step, 6)}>變為</p>
                                <img className={showStatus(step, 7)} src={memory3} alt="存變數c後的記憶體" />
                            </li>
                            <li className={showStatus(step, 7)}>c的值是'A'</li>
                        </ul>
                    </li>
                    <li className={showStatus(step, 8)}>當定義了一個字元陣列arr
                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                            {"char arr[] = {'A', 'p', 'p', 'l', 'e'};"}
                        </SyntaxHighlighter>
                        <ul>
                            <li className={showStatus(step, 8)}>會在連續的一段記憶體存指定大小的資料
                                <img className={showStatus(step, 9)} src={memory1} alt="原始記憶體" />
                                <p className={showStatus(step, 9)}>變為</p>
                                <img className={showStatus(step, 10)} src={memory4} alt="存變數c後的記憶體" />
                            </li>
                            <li className={showStatus(step, 11)}>arr的值是0x80</li>
                            <li className={showStatus(step, 12)}>透過[]可以拿到位置上的值
                                <ul>
                                    <li className={showStatus(step, 12)}>
                                        <SyntaxHighlighter className={"codeBlock " + showStatus(step, 12)} language='c' style={tomorrow}>
                                            {"arr[0];   // 得到'A'"}
                                        </SyntaxHighlighter>
                                    </li>
                                    <li className={showStatus(step, 12)}>
                                        <SyntaxHighlighter className={"codeBlock " + showStatus(step, 12)} language='c' style={tomorrow}>
                                            {"arr[3];   // 得到'l'"}
                                        </SyntaxHighlighter>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={showStatus(step, 13)}>當定義了一個字元陣列str
                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                            {"char str[] = \"Apple\";"}
                        </SyntaxHighlighter>
                        <ul>
                            <li className={showStatus(step, 13)}>會在連續的一段記憶體存指定大小的資料，並且<span style={{ color: 'red' }}>結尾會多一個'\0'</span>
                                <img className={showStatus(step, 14)} src={memory1} alt="原始記憶體" />
                                <p className={showStatus(step, 14)}>變為</p>
                                <img className={showStatus(step, 15)} src={memory5} alt="存變數c後的記憶體" />
                            </li>
                            <li className={showStatus(step, 15)}>str的值是0x80</li>
                            <li className={showStatus(step, 16)}>透過[]可以拿到位置上的值
                                <ul>
                                    <li className={showStatus(step, 16)}>
                                        <SyntaxHighlighter className={"codeBlock " + showStatus(step, 16)} language='c' style={tomorrow}>
                                            {"str[1];   // 得到'p'"}
                                        </SyntaxHighlighter>
                                    </li>
                                    <li className={showStatus(step, 16)}>
                                        <SyntaxHighlighter className={"codeBlock " + showStatus(step, 16)} language='c' style={tomorrow}>
                                            {"str[4];   // 得到'e'"}
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

export default Page5;