import Data from '../Data/info'
import ProjectCard from './ProjectCard'
import styles from '../styles/ProjectSection.module.css'

function ProjectList(){
    const imageList = Data.map(item =>{
        return item.image
    })

    return(
        <div className={`${styles.projectList} bg-gradient-to-t from-pink-100 to-white pt-5 pb-5`}>
            {
                Data.map((item, i)=>{
                    return <ProjectCard
                        key={i}
                        projectName = {item.projectName}
                        url = {item. liveURL}
                        repo = {item.githubURL}
                        image = {item.image}
                        tags = {item.tags}
                        imageList = {imageList}
                    />
                })
            }
        </div>
    )
}

export default ProjectList;