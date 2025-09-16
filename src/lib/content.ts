export interface ProjectLink {
  type: 'live' | 'repo' | 'demo' | 'docs';
  url: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  short: string;
  description: string;
  tags: string[];
  year: number;
  personaBias?: string;
  links?: ProjectLink[];
  cover?: string;
  impact?: string[];
  tech?: string[];
  featured?: boolean;
}

export async function loadProjects(): Promise<Project[]> {
  try {
    const response = await fetch('/projects.json');
    if (!response.ok) {
      throw new Error(`Failed to load projects: ${response.statusText}`);
    }
    
    const projects: Project[] = await response.json();
    
    // Validate projects
    const validatedProjects = projects.filter(project => {
      if (!project.slug || !project.title || !project.short || !project.description) {
        console.warn('Invalid project found, skipping:', project);
        return false;
      }
      return true;
    });
    
    // Sort projects: featured first, then by year descending
    return validatedProjects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.year - a.year;
    });
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

export function getProjectBySlug(slug: string, projects: Project[]): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getRelatedProjects(currentProject: Project, allProjects: Project[], limit: number = 3): Project[] {
  const related = allProjects
    .filter(project => project.slug !== currentProject.slug)
    .map(project => {
      let score = 0;
      
      // Score based on shared tags
      const sharedTags = project.tags.filter(tag => currentProject.tags.includes(tag));
      score += sharedTags.length * 2;
      
      // Score based on year proximity
      const yearDiff = Math.abs(project.year - currentProject.year);
      score += Math.max(0, 3 - yearDiff);
      
      // Boost featured projects slightly
      if (project.featured) score += 0.5;
      
      return { project, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.project);
    
  return related;
}

export function getAllTags(projects: Project[]): string[] {
  const tagSet = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
