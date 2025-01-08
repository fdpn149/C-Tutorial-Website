import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page9() {

    const maxStep = 7;
    const { step, stepAdd, stepSub } = useStep(maxStep, 9);

    return (
        <>
            <Page title='數字型態' stepAdd={stepAdd} stepSub={stepSub}>
                <ul>
                    <li className={showStatus(step, 1)}>數字會因不同寫法而有不同的意思</li>
                    <li className={showStatus(step, 2)}>浮點數<br />
                        <table className={'table'} rules='cols'>
                            <thead>
                                <tr>
                                    <th>類型</th>
                                    <th className={showStatus(step, 3)}>範例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>double</td>
                                    <td className={showStatus(step, 3)}>3.2</td>
                                </tr>
                                <tr>
                                    <td>float</td>
                                    <td className={showStatus(step, 3)}>3.2f</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li className={showStatus(step, 4)}>整數<br />
                        <table className={'table'} rules='cols'>
                            <thead>
                                <tr>
                                    <th>類型</th>
                                    <th className={showStatus(step, 5)}>範例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>int</td>
                                    <td className={showStatus(step, 5)}>32768</td>
                                </tr>
                                <tr>
                                    <td>long</td>
                                    <td className={showStatus(step, 5)}>32768L</td>
                                </tr>
                                <tr>
                                    <td>long long</td>
                                    <td className={showStatus(step, 5)}>32768LL</td>
                                </tr>
                                <tr>
                                    <td>unsigned int</td>
                                    <td className={showStatus(step, 5)}>32768U</td>
                                </tr>
                                <tr>
                                    <td>unsigned long</td>
                                    <td className={showStatus(step, 5)}>32768UL</td>
                                </tr>
                                <tr>
                                    <td>unsigned long long</td>
                                    <td className={showStatus(step, 5)}>32768ULL</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li className={showStatus(step, 6)}>進位制<br />
                        <table className={'table'} rules='cols'>
                            <thead>
                                <tr>
                                    <th>類型</th>
                                    <th className={showStatus(step, 7)}>範例</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10進制</td>
                                    <td className={showStatus(step, 7)}>27</td>
                                </tr>
                                <tr>
                                    <td>16進制</td>
                                    <td className={showStatus(step, 7)}>0x1B</td>
                                </tr>
                                <tr>
                                    <td>2進制</td>
                                    <td className={showStatus(step, 7)}>0b11011</td>
                                </tr>
                                <tr>
                                    <td>8進制</td>
                                    <td className={showStatus(step, 7)}>033</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            </Page >
        </>
    );
}

export default Page9;