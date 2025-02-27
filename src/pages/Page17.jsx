import array2 from '../assets/array2.png'
import array3 from '../assets/array3.png'
import Page from './Page';
import { showStatus } from '../Utils';
import { useStep } from '../hooks/useStep';

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BlockMath, InlineMath } from 'react-katex';
import 'react-katex/dist/katex.min.css';


function Page17() {

    const maxStep = 11;
    const { step, stepAdd, stepSub } = useStep(maxStep, 17);

    return (
        <>
            <Page title='練習題<一>' stepAdd={stepAdd} stepSub={stepSub}>
                <ol>
                    <li className={showStatus(step, 1)}>
                        <ol type='a'>
                            <li>輸出高度固定的三角形</li>
                            <li>將a.的三角形增加下半部，變成菱形</li>
                            <li>讓三角形/菱形的高度可調整</li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 2)}>
                        <ol type='a'>
                            <li>先輸出「請輸入秒數」，接著等使用者輸入數值後，輸出成「時：分：秒」的形式<br />
                                ※範例輸入輸出：<br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'請輸入秒數'}</code><br />
                                <code className='example'>{'1362'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'0:22:42'}</code><br />
                            </li>
                            <li>讓a.的程式能不斷接受輸入而做對應的輸出，而非只能執行一次</li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 3)}>
                        <ol type='a'>
                            <li>輸入一個整數，能夠輸出所有位數值之和<br />
                                ※範例輸入輸出：<br />
                                <code className='example'>{'32768'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'26'}</code><br />
                            </li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 4)}>
                        <ol type='a'>
                            <li>輸入民國年，轉換成天干地支<br />
                                ※提示：將民國年除以10的餘數 餘3為甲，餘4為乙，餘5為丙，依此類推<br />
                                將民國年除以12的餘數 餘1為子，餘2為丑，餘3為寅，依此類推<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'114'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'乙巳'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'92'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'癸未'}</code><br />
                            </li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 5)}>
                        <ol type='a'>
                            <li>輸入多個正整數，最後一個輸入0，輸出最大的那一個數字<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'19 67 23 45 31 0'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'67'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'97 134 1 24 785 0'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'785'}</code><br />
                            </li>
                            <li>輸入多個正整數，最後一個輸入0，輸出最大與最小的那個數字<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'19 67 23 45 31 0'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'67 19'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'97 134 1 24 785 0'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'785 1'}</code><br />
                            </li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 6)}>
                        <ol type='a'>
                            <li>輸入三個整數，表示三角形的三個邊長，判斷是不是直角三角形<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'5 3 4'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'Yes'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'7 23 25'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'No'}</code><br />
                            </li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 7)}>
                        <ol type='a'>
                            <li>輸入x，以下列公式逼近出eˣ的數值，並輸出<br />
                                <BlockMath math='e^x=\frac{x^0}{0!}+\frac{x^1}{1!}+\frac{x^2}{2!}+\frac{x^3}{3!}+...+\frac{x^n}{n!}' />
                            </li>
                            <li>以下列公式逼近出π的數值，並輸出<br />
                                <BlockMath math='π=\frac{4}{1}-\frac{4}{3}+\frac{4}{5}-\frac{4}{7}+\frac{4}{9}-\frac{4}{11}+...+(-1)^{n+1}×\frac{4}{2n-1}' />
                            </li>
                            <li>以下列公式逼近出<InlineMath math='\sqrt{2}' />的數值，並輸出<br />
                                <BlockMath math='\sqrt{2}=1+\frac{1}{2+\frac{1}{2+\frac{1}{2+\frac{1}{2+\ddots}}}}' />
                            </li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 8)}>
                        <ol type='a'>
                            <li>輸入一個長度為8的字串，輸出反過來的字串<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'12345678'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'87654321'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'15304560'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'06540351'}</code><br />
                            </li>
                            <li>輸入一個長度為8的字串，判斷是不是迴文<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'11233211'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'Yes'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'12345678'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'No'}</code><br />
                            </li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 9)}>
                        <ol type='a'>
                            <li>輸入一個整數，輸出是不是質數<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'137'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'Yes'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'161'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'No'}</code><br />
                            </li>
                            <li>列出所有1~1000內的質數</li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 10)}>
                        <ol type='a'>
                            <li>輸入一個整數，將它因式分解，寫成一系列數的乘積<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'120'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'2 2 2 3 5'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'117'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'3 3 13'}</code><br />
                                ※範例輸入輸出(三)：<br />
                                <code className='example'>{'37'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'37'}</code><br />
                            </li>
                        </ol>
                    </li>
                    <li className={showStatus(step, 11)}>
                        <ol type='a'>
                            <li>輸入一個整數，將它轉成3進制並輸出<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'91'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'10101'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'65'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'2102'}</code><br />
                            </li>
                            <li>輸入一個整數，將它轉成12進制並輸出<br />
                                ※十與十一分別用A與B來表示<br />
                                ※範例輸入輸出(一)：<br />
                                <code className='example'>{'71'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'5B'}</code><br />
                                ※範例輸入輸出(二)：<br />
                                <code className='example'>{'128'}</code><br />
                                <code className='example' style={{ color: '#5C6BBF' }}>{'A8'}</code><br />
                            </li>
                        </ol>
                    </li>
                </ol>
            </Page >
        </>
    );
}

export default Page17;