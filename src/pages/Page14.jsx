import branch_1 from '../assets/branch_2.png'
import branch_2 from '../assets/branch_6.png'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page14() {

    const maxStep = 2;
    const { step, stepAdd, stepSub } = useStep(maxStep, 14);

    return (
        <>
            <Page title='while vs do-while' stepAdd={stepAdd} stepSub={stepSub}>
                <table className={'table'} rules='cols'>
                    <thead>
                        <tr>
                            <th>標題</th>
                            <th>while</th>
                            <th>do-while</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>說明</td>
                            <td>先看條件再做</td>
                            <td>先做再看條件</td>
                        </tr>
                        <tr>
                            <td className={showStatus(step, 1)}>流程圖</td>
                            <td className={showStatus(step, 1)}><img src={branch_1} alt='while流程圖' /></td>
                            <td className={showStatus(step, 1)}><img src={branch_2} alt='do-while流程圖' /></td>
                        </tr>
                        <tr>
                            <td className={showStatus(step, 2)}>寫法</td>
                            <td className={showStatus(step, 2)}>
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'while(`條件`)\n{\n  `做某些事`\n}'}
                                </SyntaxHighlighter>
                            </td>
                            <td className={showStatus(step, 2)}>
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'do\n{\n  `做某些事`\n} while(`條件`);'}
                                </SyntaxHighlighter>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Page >
        </>
    );
}

export default Page14;