// Google Analytics utility functions
// Use these to track custom events throughout your app

declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'js',
            targetId: string | Date,
            config?: Record<string, any>
        ) => void
        dataLayer: any[]
    }
}

// Track page views (automatically handled by gtag.js for route changes)
export const pageview = (url: string) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
            page_path: url,
        })
    }
}

// Track custom events
export const event = (
    action: string,
    params?: Record<string, any>
) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, params)
    }
}

// Predefined events for common actions
export const analytics = {
    // Contact form submission
    contactFormSubmit: () => {
        event('form_submit', {
            form_name: 'contact_form',
            form_location: 'contact_page',
        })
    },

    // Portfolio project click
    portfolioClick: (projectId: string, projectTitle: string) => {
        event('portfolio_click', {
            project_id: projectId,
            project_title: projectTitle,
        })
    },

    // Email click
    emailClick: (location: string) => {
        event('contact_click', {
            contact_type: 'email',
            click_location: location,
        })
    },

    // Phone click
    phoneClick: (location: string) => {
        event('contact_click', {
            contact_type: 'phone',
            click_location: location,
        })
    },

    // CTA button click
    ctaClick: (ctaText: string, location: string) => {
        event('cta_click', {
            cta_text: ctaText,
            cta_location: location,
        })
    },

    // Social media click
    socialClick: (platform: string) => {
        event('social_click', {
            platform: platform,
        })
    },

    // Portfolio category filter
    portfolioFilter: (category: string) => {
        event('portfolio_filter', {
            filter_category: category,
        })
    },

    // Journal article view
    journalView: (articleId: string, articleTitle: string) => {
        event('journal_view', {
            article_id: articleId,
            article_title: articleTitle,
        })
    },
}
