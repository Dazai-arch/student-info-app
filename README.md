# Student Information System

## Team Members
- Student 1 – [Alok Tayal] – Team Lead / UI Developer
- Student 2 – [Maniarasan J] – JavaScript Developer

## Project Description
A simple static web application that displays basic student information
(Name, Register Number, Programme) along with contact details, and a
"Show Details" button powered by JavaScript. The purpose of this project
is not the application itself, but to practice a collaborative Git
workflow — branching, pull requests, code review, merging, and resolving
merge conflicts.

## Technologies Used
- HTML5
- CSS3
- JavaScript (vanilla)
- Git & GitHub

## Git Branching Strategy
All new work was done on feature branches created from `main`, then
merged back via Pull Requests after review — `main` was never edited
directly.

Branches used:
- `main` – stable, integrated version of the app
- `feature/ui` – UI/CSS improvements (Student 1)
- `feature/javascript` – JavaScript functionality (Student 2)
- `feature/contact` – added contact information section (Student 1)
- `feature/student-name` – updated the application heading (Student 1)
- `feature/app-title` – updated the application title (Student 2)

## Pull Requests Created
1. `feature/ui → main` — Improve student information UI
2. `feature/javascript → main` — Add student details functionality
3. `feature/contact → main` — Add contact information
4. `feature/student-name → main` — Update application heading
5. `feature/app-title → main` — Update application title (resulted in a merge conflict, see below)

## Merge Conflict

**What caused it:**
Two branches (`feature/student-name` and `feature/app-title`) were both
created from the same version of `main`, and each branch changed the
same line in `index.html` — the `<h1>` heading — but to different text.
When `feature/student-name` was merged first, `main` was updated with
its version of the heading. When `feature/app-title` was then merged,
Git could not automatically determine which version of that line to
keep, since both branches had modified it differently from their common
ancestor.

**How it was resolved:**
The conflict was resolved locally by:
1. Pulling the latest `main` and merging it into `feature/app-title`
   (`git merge main`), which surfaced the conflict markers
   (`<<<<<<<`, `=======`, `>>>>>>>`) in `index.html`.
2. Manually editing the file to combine both intended changes into a
   single, meaningful heading.
3. Removing the conflict markers, staging the resolved file
   (`git add index.html`), and committing the resolution
   (`git commit -m "Resolve merge conflict in application title"`).
4. Pushing the resolved branch and merging the now-conflict-free Pull
   Request into `main`.

## How to Run the Application
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate into the project folder:
   ```
   cd student-info-app
   ```
3. Open `index.html` directly in any web browser (double-click the file,
   or right-click → Open with → your browser).
4. Click the **Show Details** button to view the student's details.