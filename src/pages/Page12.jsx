import branch_1 from '../assets/branch_1.png'
import branch_2 from '../assets/branch_3.png'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page12() {

    const maxStep = 3;
    const { step, stepAdd, stepSub } = useStep(maxStep, 12);

    return (
        <>
            <Page title='if vs if-else' stepAdd={stepAdd} stepSub={stepSub}>
                <table className={'table'} rules='cols'>
                    <thead>
                        <tr>
                            <th>標題</th>
                            <th>if</th>
                            <th>if-else</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>說明</td>
                            <td>如果條件成立就做某些事</td>
                            <td>如果條件成立就做某些事，<br />否則就做另一些事</td>
                        </tr>
                        <tr>
                            <td className={showStatus(step, 1)}>流程圖</td>
                            <td className={showStatus(step, 1)}><img src={branch_1} alt='if流程圖' /></td>
                            <td className={showStatus(step, 1)}><img src={branch_2} alt='if-else流程圖' /></td>
                        </tr>
                        <tr>
                            <td className={showStatus(step, 2)}>寫法</td>
                            <td className={showStatus(step, 2)}>
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'if(`條件`)\n{\n  `做某些事`\n}'}
                                </SyntaxHighlighter>
                            </td>
                            <td className={showStatus(step, 2)}>
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'if(`條件`)\n{\n  `做某些事`\n}\nelse\n{\n  `做另一些事`\n}'}
                                </SyntaxHighlighter>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ul>
                    <li className={showStatus(step, 3)}>另一種寫法<br />
                        <ul>
                            <li className={showStatus(step, 3)}>三元運算子<br />
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'`條件` ? `做某些事(值)` : `做另一些事(值)` ;'}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Page >
        </>
    );
}

export default Page12;