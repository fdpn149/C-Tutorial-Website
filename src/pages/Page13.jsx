import branch_1 from '../assets/branch_4.png'
import branch_2 from '../assets/branch_5.png'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page13() {

    const maxStep = 2;
    const { step, stepAdd, stepSub } = useStep(maxStep, 13);

    return (
        <>
            <Page title='if-else vs switch-case' stepAdd={stepAdd} stepSub={stepSub}>
                <table className={'table'} rules='cols'>
                    <thead>
                        <tr>
                            <th>標題</th>
                            <th>if-else</th>
                            <th>switch-case</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>說明</td>
                            <td>依據條件做不同的事</td>
                            <td>依據值做不同的事</td>
                        </tr>
                        <tr>
                            <td className={showStatus(step, 1)}>流程圖</td>
                            <td className={showStatus(step, 1)}><img src={branch_1} alt='if-else流程圖' style={{ maxWidth: '90%' }} /></td>
                            <td className={showStatus(step, 1)}><img src={branch_2} alt='switch-case流程圖' style={{ maxWidth: '90%' }} /></td>
                        </tr>
                        <tr>
                            <td className={showStatus(step, 2)}>寫法</td>
                            <td className={showStatus(step, 2)}>
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'if(`條件A`)\n{\n  `做屬於A的事`\n}\nelse if(`條件B`)\n{\n  `做屬於B的事`\n}\nelse if(`條件C`)\n{\n  `做屬於C的事`\n}\nelse\n{\n  `做其它的事`\n}'}
                                </SyntaxHighlighter>
                            </td>
                            <td className={showStatus(step, 2)}>
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'switch(`變數`)\n{\n  case α:\n    `做屬於α的事`\n    break;\n  case β:\n    `做屬於β的事`\n    break;\n  case γ:\n    `做屬於γ的事`\n    break;\n  default:\n    `做其它的事`\n}'}
                                </SyntaxHighlighter>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Page >
        </>
    );
}

export default Page13;