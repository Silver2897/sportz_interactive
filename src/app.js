import './app.css';
import React, { useState } from 'react';

const SorryPage = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [activePromise, setActivePromise] = useState(null);
  const [showFinal, setShowFinal] = useState(false);

  const promises = [
    {
      icon: '👂',
      title: 'I’ll Listen',
      text: 'I want to listen to understand you, not just to respond.'
    },
    {
      icon: '🤝',
      title: 'I’ll Do Better',
      text: 'I don’t want my apology to only be words. I want my actions to prove it.'
    },
    {
      icon: '❤️',
      title: 'I’ll Choose Us',
      text: 'Even when things get difficult, I want to remember that we are on the same side.'
    },
    {
      icon: '🌱',
      title: 'I’ll Grow',
      text: 'I’ll learn from my mistakes instead of repeating them.'
    }
  ];

  return (
    <div className="sorry-page">

      {/* Background hearts */}
      <div className="floating-heart heart-one">♥</div>
      <div className="floating-heart heart-two">♥</div>
      <div className="floating-heart heart-three">♥</div>
      <div className="floating-heart heart-four">♥</div>
      <div className="floating-heart heart-five">♥</div>

      <div className="sorry-card">

        {/* Badge */}
        <div className="sorry-badge">
          💌 A message from my heart
        </div>

        {/* Main heart */}
        <div className="heart-icon">❤️</div>

        <h1 className="sorry-title">
          I&apos;m Sorry,
          <span>My Love</span>
        </h1>

        <div className="divider">
          <span>♡</span>
          <span>♥</span>
          <span>♡</span>
        </div>

        {/* Intro */}
        <p className="sorry-message">
          I know saying &quot;I&apos;m sorry&quot; can&apos;t magically make everything
          okay. But I hope you know that I mean it with all my heart.
        </p>

        <p className="sorry-message">
          Hurting you is the last thing I ever wanted. You mean far too much
          to me for me to be okay knowing that my words or actions made you
          feel hurt.
        </p>

        {/* Image-inspired message */}
        <div className="love-letter">

          <div className="letter-heading">
            I&apos;M SORRY
            <br />
            <span>I HURT YOU</span>
          </div>

          <div className="letter-columns">
            <p>
              THOSE
              <br />
              WORDS CAN&apos;T
              <br />
              UNDO THE
              <br />
              PAIN I&apos;VE
              <br />
              CAUSED.
            </p>

            <p>
              BUT THEY
              <br />
              COME FROM
              <br />
              THE
              <br />
              DEEPEST
              <br />
              PART OF ME.
            </p>
          </div>

          <p className="letter-body">
            KNOWING I HURT THE ONE I LOVE MOST IS A BURDEN I
            CARRY DAILY. YOU TRUSTED ME, AND I LET YOU DOWN.
            I HATE THAT MY ACTIONS CONTRADICTED MY LOVE FOR
            YOU, A LOVE THAT RUNS DEEP AND TRUE.
          </p>

          <p className="letter-body">
            I CAN&apos;T REWRITE THE PAST, BUT I PROMISE TO SHOW
            YOU, THROUGH MY ACTIONS, THAT I&apos;M COMMITTED TO
            HEALING, TO GROWTH, AND TO BEING THE PARTNER YOU
            TRULY DESERVE.
          </p>

          <div className="letter-ending">
            I Love You Forever! ❤️
          </div>

        </div>

        {/* First interaction */}
        {!showLetter && (
          <button
            className="sorry-button"
            onClick={() => setShowLetter(true)}
          >
            There&apos;s More I Want To Say 💌
          </button>
        )}

        {/* Promise section */}
        {showLetter && (
          <div className="interactive-section">

            <h2>
              But My Apology Isn&apos;t Just About Words...
            </h2>

            <p className="section-subtitle">
              Tap each one. These are things I genuinely want to do better.
            </p>

            <div className="promise-grid">
              {promises.map((promise, index) => (
                <button
                  key={promise.title}
                  className={`promise-card ${
                    activePromise === index ? 'active' : ''
                  }`}
                  onClick={() =>
                    setActivePromise(
                      activePromise === index ? null : index
                    )
                  }
                >
                  <div className="promise-icon">
                    {promise.icon}
                  </div>

                  <h3>{promise.title}</h3>

                  {activePromise === index && (
                    <p>{promise.text}</p>
                  )}

                  {activePromise !== index && (
                    <span className="tap-text">
                      Tap me ♥
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Second interaction */}
            <div className="question-box">

              <div className="question-heart">💗</div>

              <h2>
                Do you know what I&apos;ve realized?
              </h2>

              <p>
                I don&apos;t want to win arguments.
                <br />
                I don&apos;t want to prove who is right.
                <br />
                I don&apos;t want pride to come between us.
              </p>

              <p className="big-line">
                I just want <strong>us.</strong>
              </p>

              <button
                className="continue-button"
                onClick={() => setShowFinal(true)}
              >
                One Last Thing... ❤️
              </button>

            </div>

          </div>
        )}

        {/* Final message */}
        {showFinal && (
          <div className="final-message-box">

            <div className="final-heart">
              ❤️
            </div>

            <h2>
              You Mean More To Me Than You Know.
            </h2>

            <p>
              I don&apos;t expect one apology to erase everything.
              I just hope you can see that behind these words is
              someone who genuinely cares about you and about us.
            </p>

            <p>
              I&apos;m sorry for the moments where I made you feel
              anything less than loved, appreciated, respected, and
              understood.
            </p>

            <p>
              Thank you for every memory, every laugh, every little
              moment, every conversation, and every bit of love you
              have given me.
            </p>

            <div className="final-highlight">
              I would choose you again.
              <br />
              And again.
              <br />
              And again.
              <br />
              <span>❤️ Always.</span>
            </div>

            <div className="signature">
              Forever yours,
              <br />
              <strong>❤️ Me</strong>
            </div>

            <div className="forever">
              ♡ You & Me ♡
            </div>

          </div>
        )}

        <div className="bottom-text">
          Some things are worth fighting for...
          <br />
          <strong>and you are one of them. ❤️</strong>
        </div>

      </div>
    </div>
  );
};

export default SorryPage;