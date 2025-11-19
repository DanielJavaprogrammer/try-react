import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./workerSection.module.css";

function WorkerSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>
            É um <br></br> profissional?
          </h1>
          <p>
            Se você é um prestador de serviços e se vê capaz de atuar com
            diversas demandas, esse site é pra você. <br></br>Veja nosso vídeo e
            entenda como você pode se tornar um profissional na MCW e começar
            hoje mesmo a receber propostas.
          </p>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>
              <Link to="/queroSerProfissional">Quero ser um profissional</Link>
            </button>
          </div>
        </div>

        <div className={styles.circleWrapper}>
          <div
            className={`${styles.circleBorder} ${
              isPlaying ? "" : styles.pausedAnimation
            }`}
          ></div>
          <div className={styles.videoWrapper} onClick={togglePlay}>
            <video
              ref={videoRef}
              src="/videos/videoteste.mp4"
              playsInline
              onEnded={() => setIsPlaying(false)}
            />
            {/* Botão de Play - Só aparece se NÃO estiver tocando */}
            {!isPlaying && (
              <div className={styles.playButtonOverlay}>
                <div className={styles.playIcon}>▶</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkerSection;
