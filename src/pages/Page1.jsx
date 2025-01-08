import './Page.css'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

function Page1() {

    const maxStep = 6;
    const { step, stepAdd, stepSub } = useStep(maxStep, 1);

    return (
        <>
            <Page title='基本整數資料型態' stepAdd={stepAdd} stepSub={stepSub}>
                <ul>
                    <li className={showStatus(step, 1)}>分為「有號數(含負數)」與「無號數」兩種</li>
                </ul>
                <div className='box'>
                    <table className='table' rules='cols'>
                        <thead>
                            <tr>
                                <th className={showStatus(step, 2)}>範圍(2ᴺ)</th>
                                <th className={showStatus(step, 2)}>範圍(數值)</th>
                                <th className={showStatus(step, 3)}>類型</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={showStatus(step, 2)}>0~2⁸-1</td>
                                <td className={showStatus(step, 2)}>0~255</td>
                                <td className={showStatus(step, 3)}>unsigned char</td>
                            </tr>
                            <tr>
                                <td className={showStatus(step, 2)}>0~2¹⁶-1</td>
                                <td className={showStatus(step, 2)}>0~65535</td>
                                <td className={showStatus(step, 3)}>unsigned short</td>
                            </tr>
                            <tr>
                                <td className={showStatus(step, 2)}>0~2³²-1</td>
                                <td className={showStatus(step, 2)}>0~4294967295</td>
                                <td className={showStatus(step, 3)}>unsigned int</td>
                            </tr>
                        </tbody>
                    </table>
                    <table rules='cols'>
                        <thead>
                            <tr>
                                <th className={showStatus(step, 4)}>範圍(2ᴺ)</th>
                                <th className={showStatus(step, 4)}>範圍(數值)</th>
                                <th className={showStatus(step, 5)}>類型</th>
                                <th className={showStatus(step, 6)}>簡寫</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={showStatus(step, 4)}>-2⁷~2⁷-1</td>
                                <td className={showStatus(step, 4)}>-128~127</td>
                                <td className={showStatus(step, 5)}>signed char</td>
                                <td className={showStatus(step, 6)}>char</td>
                            </tr>
                            <tr>
                                <td className={showStatus(step, 4)}>-2¹⁵~2¹⁵-1</td>
                                <td className={showStatus(step, 4)}>-32768~32767</td>
                                <td className={showStatus(step, 5)}>signed short</td>
                                <td className={showStatus(step, 6)}>short</td>
                            </tr>
                            <tr>
                                <td className={showStatus(step, 4)}>-2³¹~2³¹-1</td>
                                <td className={showStatus(step, 4)}>-2147483648~2147483647</td>
                                <td className={showStatus(step, 5)}>signed int</td>
                                <td className={showStatus(step, 6)}>int</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul>
                    <li className={showStatus(step, 6)}>signed修飾符通常會直接省略</li>
                </ul>
            </Page>
        </>
    );
}

export default Page1;