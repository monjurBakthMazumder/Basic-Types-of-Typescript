{
    // Intersection  type
  type TFrontendDeveloper ={
    skills: string[],
    designation1: "Frontend Developer"
  }
  type TBackendDeveloper ={
    skills: string[],
    designation2: "Backend Developer"
  }
  type TFullStackDeveloper =TFrontendDeveloper & TBackendDeveloper

  const fullStackDeveloper:TFullStackDeveloper ={
    skills: ["react", "express", "node"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"

  }
}