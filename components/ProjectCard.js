import Image from "next/image";
import styles from '../styles/ProjectSection.module.css'

function ProjectCard({projectName, url, repo, image, tags}){
    return(
        <div className={`${styles.projectCard} transition-transform duration-600 md:hover:scale-110 drop-shadow-xl bg-slate-100`}>
            <div className={`${styles.thumbnail} drop-shadow-lg`}>
                <Image src ={`${image}`} alt ="thumbnail" layout="fill"/>
            </div>
            <div className={styles.projectInfo}>
                <h1 className="text-center text-md font-bold">{projectName}</h1>
                <div className="flex">
                    <a href = {url} className="border-2 border-pink-500 hover:bg-pink-500 hover:text-white cursor-pointer" target="_blank" rel="noopener noreferrer">Live</a>
                    <a href = {repo}className="border-2 border-pink-500 hover:bg-pink-500 hover:text-white cursor-pointer" target="_blank" rel="noopener noreferrer">Source</a>
                </div>
            </div>
        </div>
    );
}


export default ProjectCard;