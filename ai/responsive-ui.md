# Responsive UI — AI Implementation Guide

Use this guide when creating or changing interfaces. Adapt it to the product, framework, and existing design system; do not force the same layout on every feature.

## Before implementation

1. **Plan narrow screens first.** Identify the primary user goal, essential content, navigation, and actions. Briefly describe how the layout changes on narrow, medium, and wide screens before writing UI code.
2. **Choose intentional responsive behavior.** Decide what stacks, wraps, changes columns, becomes a separate view, or stays visible. A desktop sidebar or dense table must not be blindly stacked beneath everything on mobile.
3. **Establish information hierarchy.** Group related data; make primary actions discoverable. Avoid generic vertical stacks that give every field equal weight.

## During implementation

4. **Use fluid layouts and content-driven breakpoints.** Follow the project's existing tokens and CSS conventions. Use fixed widths or device-specific breakpoints only with a clear reason.
5. **Prevent overflow and lost information.** Account for narrow viewports, long labels, translated text, large text, and flexible children. If truncation is necessary, keep full information accessible. Provide a deliberate strategy for wide tables and data-dense content.
6. **Preserve usability and accessibility.** Navigation and actions must work with touch and keyboard. Ensure visible focus, adequately sized targets, and logical reading order; sticky/fixed elements must not cover content or focused controls.
7. **Design all meaningful states.** Populated, empty, loading, error, disabled, and success states should remain understandable at each layout size.

## Verification

8. **Inspect the rendered UI** at representative narrow (~375px), medium (~768px), and wide (~1280px) widths, adjusting breakpoints where content actually requires it. Also check long content and increased text size/browser zoom.
9. **Test the user journey**, including navigation and key interactions by keyboard. Verify that no important content or action is hidden, clipped, or needlessly distant.
10. **Report the result.** Say what viewports/states were actually checked, what was fixed, and anything still unverified. Do not claim browser verification if it was not performed.

These rules guide judgment; they are not a requirement to add dependencies, build a design system, or support arbitrary fixed device categories.
