import './App.css'
import { Animator, Fade, FadeIn, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn, batch } from 'react-scroll-motion'

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());
const Spin = (cycle) =>
  ({
    in: {
      style: {
        // `p` is number (0~1)
        // When just before this page appear, `p` will be 0
        // When this page filled your screen, `p` will be 1
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
    out: {
      style: {
        // `p` is number (0~1)
        // When this page filled your screen, `p` will be 0
        // When just after this page disappear, `p` will be 1
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
  });

function App() {
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            Let me show you scroll animation 😀
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <h2>I'm FadeUpScrollOut</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp}>
            <h2>I'm FadeUp</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <div className='section-3'>
            <h2>
              <Animator animation={MoveIn(-1000, 0)}>Hello guys</Animator>
              <Animator animation={MoveIn(1000, 0)}>Nice to meet you</Animator>
              <Animator animation={MoveOut(1000, 0)}>Good bye</Animator>
              <Animator animation={MoveOut(-1000, 0)}>See you</Animator>
            </h2>
          </div>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), Spin(3))}>
            <h1 style={{ fontSize: 50 }}>Hello!!!</h1>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  )
}

export default App
