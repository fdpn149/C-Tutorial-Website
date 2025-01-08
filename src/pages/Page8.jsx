import float_double from '../assets/float_double.png'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Page8() {

    const maxStep = 3;
    const { step, stepAdd, stepSub } = useStep(maxStep, 8);

    return (
        <>
            <Page title='浮點數' stepAdd={stepAdd} stepSub={stepSub}>
                <ul>
                    <li className={showStatus(step, 1)}>浮點數與科學記號表示法差不多(可以想成2進制的科學記號)</li>
                </ul>
                <table className={'table ' + showStatus(step, 2)} rules='cols'>
                    <thead>
                        <tr>
                            <th>類型</th>
                            <th>範例</th>
                            <th>意義</th>
                            <th>寫法</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>科學記號</td>
                            <td>1011₍₁₀₎</td>
                            <td>1×10³+0×10²+1×10¹+1×10⁰</td>
                            <td>1.011×10³</td>
                        </tr>
                        <tr>
                            <td>浮點數</td>
                            <td>1011₍₂₎</td>
                            <td>1×2³+0×2²+1×2¹+1×2⁰</td>
                            <td>1.011×2³</td>
                        </tr>
                    </tbody>
                </table>
                <img className={showStatus(step, 3)} src={float_double} alt='float與double比較' />
                <ul>
                    <li className={showStatus(step, 3)}>Sign儲存「正負號」</li>
                    <li className={showStatus(step, 3)}>Exponent儲存2的「次方數」</li>
                    <li className={showStatus(step, 3)}>Fraction儲存1.「後面的小數」</li>
                </ul>
            </Page >
        </>
    );
}

export default Page8;