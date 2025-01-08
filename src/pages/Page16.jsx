import array2 from '../assets/array2.png'
import array3 from '../assets/array3.png'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page16() {

    const maxStep = 5;
    const { step, stepAdd, stepSub } = useStep(maxStep, 16);

    return (
        <>
            <Page title='結構' stepAdd={stepAdd} stepSub={stepSub}>
                <ul>
                    <li className={showStatus(step, 1)}>原本的變數都只能儲存一個型態的值</li>
                    <li className={showStatus(step, 1)}>結構可以儲存一組型態的值</li>
                    <li className={showStatus(step, 2)}>舉例
                        <ul>
                            <li>int的陣列<br />
                                <img src={array2} alt='int的陣列' />
                            </li>
                            <li className={showStatus(step, 3)}>struct的陣列<br />
                                <img src={array3} alt='struct的陣列' />
                            </li>
                        </ul>
                    </li>
                    <li className={showStatus(step, 4)}>寫法
                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                            {'struct `結構名稱`\n{\n  型別1 名稱1;\n  型別2 名稱2;\n  ...\n}'}
                        </SyntaxHighlighter>
                    </li>
                    <li className={showStatus(step, 4)}>用法
                        <ul>
                            <li>宣告
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'struct `結構名稱` `結構變數名稱`;'}
                                </SyntaxHighlighter>
                            </li>
                            <li>存值
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'`結構變數名稱`.`型別N` = `值`;'}
                                </SyntaxHighlighter>
                            </li>
                            <li>取值
                                <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                                    {'`結構變數名稱`.`型別N`'}
                                </SyntaxHighlighter>
                            </li>
                        </ul>
                    </li>
                    <li className={showStatus(step, 5)}>實例
                        <SyntaxHighlighter className={"codeBlock "} language='c' style={tomorrow}>
                            {'struct Student\n{\n  char name[10];\n  int num;\n};\n\nstruct Student a = {"abc", 2};\n\na.num = 8;\t//將a的num值改為8\n\nprintf(a.name)\t// 得到abc\nprintf(a.name);\t// 得到8'}
                        </SyntaxHighlighter>
                    </li>
                </ul>
            </Page >
        </>
    );
}

export default Page16;