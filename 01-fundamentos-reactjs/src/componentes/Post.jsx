import styles from './Post.module.css' 

const Post = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/victorfmesq.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>João Victor</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='17 de novembro de 2022' dateTime='2022-11-17 16:05:30'>Publicado há 1h</time>
            </header>
            <div classname={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>
                    <a href="">👉 jane.design/doctorcare</a>
                </p>
                <p>
                    <a href=""> #novoprojeto #nlw #rocketseat </a>
                </p>
            </div>
            <hr />
            <footer className={styles.footer}>
                <strong>Deixe seu feedback</strong>
                <textarea name="feedBackField" id=""></textarea>
                <button type='button'>Publicar</button>
            </footer>
        </article>
    );
}

export default Post;