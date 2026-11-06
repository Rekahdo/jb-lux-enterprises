- (default) : Unprefixed -> Targets < 640px (Mobile view)
- sm:       : min-width: 640px  (Large phones / Small tablets)
- md:       : min-width: 768px  (Tablets / Small laptops)
- lg:       : min-width: 1024px (Laptops / Desktops)
- xl:       : min-width: 1280px (Large Desktop screens)
- 2xl:      : min-width: 1536px (Extra Large / 4K monitors)



TAILWIND CSS BREAKPOINT & VARIANT REFERENCE
=============================================================================

sm: 640px - 767px
min-sm: screen >= 640px  (Standard `sm:` — applies from 640px and up)
max-sm: screen < 640px   (Applies ONLY below 640px, i.e., @media (max-width: 639px))

md: 768px - 1023px
min-md: screen >= 768px  (Standard `md:` — applies from 768px and up)
max-md: screen < 768px   (Applies ONLY below 768px, i.e., @media (max-width: 767px))

lg: 1024px - 1279px
min-lg: screen >= 1024px (Standard `lg:` — applies from 1024px and up)
max-lg: screen < 1024px  (Applies ONLY below 1024px, i.e., @media (max-width: 1023px))

xl: 1280px - 1535px
min-xl: screen >= 1280px (Standard `xl:` — applies from 1280px and up)
max-xl: screen < 1280px  (Applies ONLY below 1280px, i.e., @media (max-width: 1279px))

2xl: 1536px and above
min-2xl: screen >= 1536px (Standard `2xl:` — applies from 1536px and up)
max-2xl: screen < 1536px  (Applies ONLY below 1536px, i.e., @media (max-width: 1535px))

=============================================================================
NOTE: `max-*` modifiers (like `max-md:hidden`) are built-in Tailwind v3.2+ 
utilities used to target screens strictly smaller than the given breakpoint.