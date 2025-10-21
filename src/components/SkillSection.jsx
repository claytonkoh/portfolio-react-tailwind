import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 92, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 88, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Vite", level: 80, category: "frontend" },
  { name: "Java", level: 78, category: "frontend" },
  { name: "Python", level: 82, category: "frontend" },
  { name: "MySQL", level: 85, category: "backend" },
  { name: "Python", level: 90, category: "AI" },
  { name: "Pandas", level: 88, category: "AI" },
  { name: "NumPy", level: 85, category: "AI" },
  { name: "Scikit-learn", level: 80, category: "AI" },
  { name: "TensorFlow / Keras", level: 75, category: "AI" },
  { name: "Machine Learning", level: 83, category: "AI" },
  { name: "Data Visualization (Matplotlib / Seaborn)", level: 78, category: "AI" },
];

const categories = ["all", "frontend", "backend", "AI"]


export const SkillSection = () =>{
    const[activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skills) => activeCategory === "all" || skills.category === activeCategory)
    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key) => (
                        <button key={key} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory === category ? "bg-primary text-primary-foreground" :
                                    "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                        onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5">
                    {filteredSkills.map((skill,key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-primary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow1.5s_ease-out]"
                                style={{width: skill.level + "%"}} />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}