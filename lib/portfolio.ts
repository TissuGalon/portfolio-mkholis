import fs from "fs";
import path from "path";

export interface ProjectItem {
  slug: string;
  title: string;
  desc: string;
  link: string;
  cover: string;
  badge: string;
  order: number;
  content: string;
  gallery: string[];
}

export function getPortfolioProjects(): ProjectItem[] {
  const contentDirectory = path.join(process.cwd(), "content/portfolio");

  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);

  const projects = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parse YAML frontmatter
      const match = fileContents.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
      const data: Record<string, any> = {};
      let content = fileContents;

      if (match) {
        const yamlContent = match[1];
        content = match[2];

        yamlContent.split("\n").forEach((line) => {
          const colonIndex = line.indexOf(":");
          if (colonIndex !== -1) {
            const key = line.slice(0, colonIndex).trim();
            let value = line.slice(colonIndex + 1).trim();

            // Strip quotes if they exist
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.substring(1, value.length - 1);
            } else if (value.startsWith("'") && value.endsWith("'")) {
              value = value.substring(1, value.length - 1);
            }

            if (key === "gallery") {
              data[key] = value.split(",").map((img) => img.trim());
            } else if (key === "order") {
              data[key] = parseInt(value, 10);
            } else {
              data[key] = value;
            }
          }
        });
      }

      return {
        slug,
        title: data.title || slug,
        desc: data.desc || "",
        link: data.link || "#portfolio",
        cover: data.cover || "",
        badge: data.badge || "All",
        order: typeof data.order === "number" ? data.order : 99,
        content: content.trim(),
        gallery: data.gallery || [],
      };
    });

  return projects.sort((a, b) => a.order - b.order);
}

export function getPortfolioProjectBySlug(slug: string): ProjectItem | null {
  const contentDirectory = path.join(process.cwd(), "content/portfolio");
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse YAML frontmatter
  const match = fileContents.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  const data: Record<string, any> = {};
  let content = fileContents;

  if (match) {
    const yamlContent = match[1];
    content = match[2];

    yamlContent.split("\n").forEach((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();

        // Strip quotes if they exist
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.substring(1, value.length - 1);
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.substring(1, value.length - 1);
        }

        if (key === "gallery") {
          data[key] = value.split(",").map((img) => img.trim());
        } else if (key === "order") {
          data[key] = parseInt(value, 10);
        } else {
          data[key] = value;
        }
      }
    });
  }

  return {
    slug,
    title: data.title || slug,
    desc: data.desc || "",
    link: data.link || "#portfolio",
    cover: data.cover || "",
    badge: data.badge || "All",
    order: typeof data.order === "number" ? data.order : 99,
    content: content.trim(),
    gallery: data.gallery || [],
  };
}

