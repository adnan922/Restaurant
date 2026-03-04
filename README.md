
# 🍽️Restaurant - Premium Restaurant Website

A modern, elegant, and fully responsive restaurant website built with **Next.js 14+ (App Router)** and **Tailwind CSS**. Designed to showcase premium dining experiences, expansive catering services, and seamless reservation inquiries.

## Features

* **Next.js App Router:** Utilizes the latest Next.js routing features for fast, server-rendered pages and nested layouts.
* **Fully Responsive Design:** Flawless layout scaling across mobile, tablet, and desktop screens using Tailwind CSS.
* **Optimized Media:** Leverages `next/image` for automatic image optimization, lazy loading, and improved Core Web Vitals.
* **Premium Typography:** Elegant pairing of `Playfair Display` (serif) and `Inter` (sans-serif) via `next/font`.
* **Modular Architecture:** Reusable components like Navbars, Footers, and Menu Items for easy maintenance.
* **Deeply Nested Routing:** Structured catering section with individual pages for Corporate and Private events (Weddings, Staff Parties, etc.).
* **Modern Iconography:** Crisp, lightweight SVG icons provided by `lucide-react`.

##  Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Language:** TypeScript / JavaScript
* **Package Manager:** npm

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have Node.js installed (Version 20.9.0 or higher is required for the latest Next.js features).
```bash
node --version

```

### Installation

1. **Clone the repository** (if you haven't already):
```bash
git clone [https://github.com/adnan922/Restaurant.git](https://github.com/adnan922/Restaurant.git)
cd Restaurant
```


2. **Install dependencies:**
```bash
npm install
```


3. **Run the development server:**
```bash
npm run dev
```


4. **Open your browser:**
Navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the application.

## Project Structure

The project follows the standard Next.js App Router structure:

```text
├── app/
│   ├── about/                  # About Us page
│   ├── catering/               # Catering section
│   │   ├── corporate-catering/ # Corporate event sub-pages
│   │   └── private-catering/   # Private event sub-pages
│   ├── components/             # Reusable UI components (Navbar, Footer)
│   ├── contact/                # Contact & Reservations page
│   ├── menu/                   # Full Catering Menu page
│   ├── globals.css             # Global Tailwind styles
│   ├── layout.tsx              # Root layout & font definitions
│   └── page.tsx                # Homepage
├── public/                     # Static assets (favicons, local images)
├── next.config.ts              # Next.js configuration (Unsplash image domains)
└── tailwind.config.ts          # Tailwind CSS configuration
```

## External Domains Configured

By default, Next.js blocks external images. The `next.config.ts` file has been pre-configured to allow high-quality placeholder images from:

* `images.unsplash.com`
* `source.unsplash.com`

*(Note: When replacing placeholders with your own images, place them in the `/public` folder or add your new image hosting domain to `next.config.ts`).*

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to a GitHub repository.
2. Create an account on Vercel.
3. Import your GitHub repository and click **Deploy**.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

