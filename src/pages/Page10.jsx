import branch_1 from '../assets/branch_1.png'
import branch_2 from '../assets/branch_2.png'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page10() {

    const maxStep = 14;
    const { step, stepAdd, stepSub } = useStep(maxStep, 10);

    return (
        <>
            <Page title='運算' stepAdd={stepAdd} stepSub={stepSub}>
                <ul>
                    <li className={'mono ' + showStatus(step, 1)}>四則運算<br />
                        <table className={'table'} rules='cols'>
                            <thead>
                                <tr>
                                    <th>運算子</th>
                                    <th className={showStatus(step, 2)}>範例</th>
                                    <th className={showStatus(step, 3)}>值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>+</td>
                                    <td className={showStatus(step, 2)}>13 + 4</td>
                                    <td className={showStatus(step, 3)}>17</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td className={showStatus(step, 2)}>13 - 4</td>
                                    <td className={showStatus(step, 3)}>9</td>
                                </tr>
                                <tr>
                                    <td>*</td>
                                    <td className={showStatus(step, 2)}>13 * 4</td>
                                    <td className={showStatus(step, 3)}>52</td>
                                </tr>
                                <tr>
                                    <td>/</td>
                                    <td className={showStatus(step, 2)}>13 / 4</td>
                                    <td className={showStatus(step, 3)}>3</td>
                                </tr>
                                <tr>
                                    <td>%</td>
                                    <td className={showStatus(step, 2)}>13 % 4</td>
                                    <td className={showStatus(step, 3)}>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li className={'mono ' + showStatus(step, 4)}>比較運算<br />
                        <table className={'table'} rules='cols'>
                            <thead>
                                <tr>
                                    <th>運算子</th>
                                    <th className={showStatus(step, 5)}>範例</th>
                                    <th className={showStatus(step, 6)}>值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{'>'}</td>
                                    <td className={showStatus(step, 5)}>{'13 > 4'}</td>
                                    <td className={showStatus(step, 6)}>{'1'}</td>
                                </tr>
                                <tr>
                                    <td>{'<'}</td>
                                    <td className={showStatus(step, 5)}>{'13 < 4'}</td>
                                    <td className={showStatus(step, 6)}>{'0'}</td>
                                </tr>
                                <tr>
                                    <td>{'>='}</td>
                                    <td className={showStatus(step, 5)}>{'13 >= 4'}</td>
                                    <td className={showStatus(step, 6)}>{'1'}</td>
                                </tr>
                                <tr>
                                    <td>{'<='}</td>
                                    <td className={showStatus(step, 5)}>{'13 <= 4'}</td>
                                    <td className={showStatus(step, 6)}>{'0'}</td>
                                </tr>
                                <tr>
                                    <td>{'=='}</td>
                                    <td className={showStatus(step, 5)}>{'13 == 4'}</td>
                                    <td className={showStatus(step, 6)}>{'0'}</td>
                                </tr>
                                <tr>
                                    <td>{'!='}</td>
                                    <td className={showStatus(step, 5)}>{'13 != 4'}</td>
                                    <td className={showStatus(step, 6)}>{'1'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li className={'mono ' + showStatus(step, 7)}>位元邏輯運算<br />
                        <table className={'table'} rules='cols'>
                            <thead>
                                <tr>
                                    <th>運算子</th>
                                    <th>意義</th>
                                    <th className={showStatus(step, 8)}>範例</th>
                                    <th className={showStatus(step, 9)}>值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{'&'}</td>
                                    <td>{'AND'}</td>
                                    <td className={showStatus(step, 8)}>{'3 & 6'}</td>
                                    <td className={showStatus(step, 9)}>{'2'}</td>
                                </tr>
                                <tr>
                                    <td>{'|'}</td>
                                    <td>{'OR'}</td>
                                    <td className={showStatus(step, 8)}>{'3 & 6'}</td>
                                    <td className={showStatus(step, 9)}>{'7'}</td>
                                </tr>
                                <tr>
                                    <td>{'^'}</td>
                                    <td>{'XOR'}</td>
                                    <td className={showStatus(step, 8)}>{'3 ^ 6'}</td>
                                    <td className={showStatus(step, 9)}>{'5'}</td>
                                </tr>
                                <tr>
                                    <td>{'~'}</td>
                                    <td>{'1的補數'}</td>
                                    <td className={showStatus(step, 8)}>{'~6'}</td>
                                    <td className={showStatus(step, 9)}>{'-7'}</td>
                                </tr>
                                <tr>
                                    <td>{'-'}</td>
                                    <td>{'2的補數'}</td>
                                    <td className={showStatus(step, 8)}>{'-6'}</td>
                                    <td className={showStatus(step, 9)}>{'-6'}</td>
                                </tr>
                                <tr>
                                    <td>{'<<'}</td>
                                    <td>{'左移位'}</td>
                                    <td className={showStatus(step, 8)}>{'12 << 2'}</td>
                                    <td className={showStatus(step, 9)}>{'48'}</td>
                                </tr>
                                <tr>
                                    <td>{'>>'}</td>
                                    <td>{'右移位'}</td>
                                    <td className={showStatus(step, 8)}>{'12 >> 2'}</td>
                                    <td className={showStatus(step, 9)}>{'3'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li className={'mono ' + showStatus(step, 10)}>條件邏輯運算<br />
                        <ul>
                            <li className={showStatus(step, 10)}>T為非0的值</li>
                        </ul>
                        <table className={'table'} rules='cols'>
                            <thead>
                                <tr>
                                    <th>運算子</th>
                                    <th>意義</th>
                                    <th className={showStatus(step, 11)}>範例</th>
                                    <th className={showStatus(step, 12)}>值</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{'&&'}</td>
                                    <td>{'且'}</td>
                                    <td className={showStatus(step, 11)}>{'0 && T && 0'}</td>
                                    <td className={showStatus(step, 12)}>{'0'}</td>
                                </tr>
                                <tr>
                                    <td>{'||'}</td>
                                    <td>{'或'}</td>
                                    <td className={showStatus(step, 11)}>{'0 || T || 0'}</td>
                                    <td className={showStatus(step, 12)}>{'T'}</td>
                                </tr>
                                <tr>
                                    <td>{'!'}</td>
                                    <td>{'非'}</td>
                                    <td className={showStatus(step, 11)}>{'!T'}</td>
                                    <td className={showStatus(step, 12)}>{'0'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li className={showStatus(step, 13)}>四則運算、位元邏輯運算(除了負號) 可以將「A = A `符號` B」改寫成「A `符號`= B」
                        <ul>
                            <li>
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'a = a + 8;'}
                                </SyntaxHighlighter>
                                可以改寫成
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'a += 8;'}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </li>
                    <li className={showStatus(step, 14)}>「A = A + 1」可以改寫成「A++」，「A = A - 1」可以改寫成「A--」</li>
                </ul>
            </Page >
        </>
    );
}

export default Page10;