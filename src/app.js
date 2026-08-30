import './app.css';
import React, { useState } from 'react';

const SorryPage = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="sorry-page">
      {/* Floating hearts */}
      <div className="floating-heart heart-one">♥</div>
      <div className="floating-heart heart-two">♥</div>
      <div className="floating-heart heart-three">♥</div>
      <div className="floating-heart heart-four">♥</div>
      <div className="floating-heart heart-five">♥</div>

      <div className="sorry-card">
        <div className="sorry-badge">💌 A Little Message For You</div>

        <div className="heart-icon">❤️</div>

        <h1 className="sorry-title">
          I&apos;m Sorry,
          <span>My Love</span>
        </h1>

        <div className="divider">
          <span>♡</span>
          <span>♡</span>
          <span>♡</span>
        </div>

        <p className="sorry-message">
          I know that sometimes an &quot;I&apos;m sorry&quot; doesn&apos;t feel like enough,
          but I really want you to know how truly sorry I am.
        </p>

        <p className="sorry-message">
          I never want my words or actions to hurt you. You mean so much more
          to me than any argument, misunderstanding, or bad moment ever could.
        </p>

        <p className="sorry-message highlight">
          ❤️ You are incredibly special to me, and I never want you to doubt
          how much I love and care about you.
        </p>

        <button
          className="sorry-button"
          type="button"
          onClick={() => setShowMessage(!showMessage)}
        >
          {showMessage ? 'Close My Heart ❤️' : 'Read One More Thing 💌'}
        </button>

        {showMessage && (
          <div className="hidden-message">
            <div className="message-heart">💗</div>

            <p>
              If I could take away the moment that hurt you, I would.
              If I could turn back time and choose my words differently,
              I would.
            </p>

            <p>
              But since I can&apos;t change what happened, I can promise you
              something else — I can learn from it, do better, listen more,
              understand you better, and love you the way you deserve.
            </p>

            <p className="final-message">
              I don&apos;t want to win arguments.
              <br />
              I don&apos;t want to prove who is right.
              <br />
              <strong>I just want us. ❤️</strong>
            </p>

            <div className="signature">
              Forever yours,
              <br />
              <span>❤️ Me</span>
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