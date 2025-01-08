import branch_1 from '../assets/branch_2.png'
import branch_2 from '../assets/branch_6.png'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page15() {

    const maxStep = 4;
    const { step, stepAdd, stepSub } = useStep(maxStep, 15);

    return (
        <>
            <Page title='for' stepAdd={stepAdd} stepSub={stepSub}>
                <ul>
                    <li className={showStatus(step, 1)}>用法
                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                            {'for(`第一輪開始前會做`; `每輪開始前會做的條件判斷`; `每輪結束後會做`)\n{\n  `做某些事`\n}'}
                        </SyntaxHighlighter>
                        <ul>
                            <li className={showStatus(step, 2)}>等價為
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'`第一輪開始前會做`;\nwhile(`每輪開始前會做的條件判斷`)\n{\n  `做某些事`\n  `每輪結束後會做`;\n}'}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </li>
                    <li className={showStatus(step, 3)}>常用寫法
                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                            {'for(int i = 0; i < 5; i++)\n{\n  `做某些事`\n}'}
                        </SyntaxHighlighter>
                        <ul>
                            <li className={showStatus(step, 4)}>總共會執行5次 `做某些事`</li>
                        </ul>
                    </li>
                </ul>
            </Page >
        </>
    );
}

export default Page15;