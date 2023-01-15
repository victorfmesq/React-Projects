import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/victorfmesq.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jão</strong>
              <time
                title="17 de novembro de 2022"
                dateTime="2022-11-17 16:05:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom fulano, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
