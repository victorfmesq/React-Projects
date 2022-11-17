import styles from './Sidebar.module.css'

import {PencilLine} from 'phosphor-react' 

const src_img = 'https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={src_img} />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/victorfmesq.png" />
                <strong>João Victor</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>   
        </aside>
    );
}

export default Sidebar;