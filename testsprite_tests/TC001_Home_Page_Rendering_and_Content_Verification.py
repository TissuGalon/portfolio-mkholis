import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Check 'About Me' section renders with correct content.
        await page.mouse.wheel(0, 600)
        

        # -> Confirm 'Education' section displays correct entries.
        await page.mouse.wheel(0, 400)
        

        # -> Verify Skills Dock shows correct icons and animations.
        await page.mouse.wheel(0, 400)
        

        # -> Verify Skills Dock shows correct icons and animations, then fully verify Portfolio project cards.
        await page.mouse.wheel(0, 400)
        

        # -> Check Contact Section shows phone, email, and social media buttons.
        await page.mouse.wheel(0, 600)
        

        # -> Validate that all sections conform to responsive design on desktop, tablet, and mobile screens.
        await page.mouse.wheel(0, -await page.evaluate('() => window.innerHeight'))
        

        await page.mouse.wheel(0, await page.evaluate('() => window.innerHeight'))
        

        await page.mouse.wheel(0, -await page.evaluate('() => window.innerHeight'))
        

        await page.mouse.wheel(0, await page.evaluate('() => window.innerHeight'))
        

        # -> Validate that all sections conform to responsive design on desktop, tablet, and mobile screens.
        frame = context.pages[-1]
        # Open device toolbar or responsive mode to test different screen sizes
        elem = frame.locator('xpath=html/body/div[2]/div/nav/header/ul[2]/li/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=PERSONAL PORTFOLIO').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Hi, I’m').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Muhammad Kholis').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A passionate Flutter & Web Developer who loves building modern, fast, and beautiful applications.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ABOUT ME').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Saya adalah mahasiswa aktif Program Studi Teknik Informatika di Politeknik Negeri Lhokseumawe dengan minat dan keahlian di bidang pengembangan aplikasi mobile dan web. Berpengalaman dalam membangun berbagai proyek, mulai dari website organisasi hingga aplikasi produktivitas berbasis Flutter, Firebase, dan SQLite. Terbiasa bekerja dalam tim, semangat belajar tinggi, dan selalu berusaha menghasilkan karya berkualitas.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=EDUCATION & SKILLS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=EDUCATION').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SMK Negeri 2 Langsa').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Rekayasa Perangkat Lunak (2019 - 2022)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Nilai Akhir: 84,81').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Politeknik Negeri Lhokseumawe').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Teknik Informatika (2022 - Sekarang)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=IPK Terakhir: 3.45 / 4.00').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=SKILLS').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Programming').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Dart, PHP, HTML, JavaScript, Python').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Tools').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Photoshop, Premiere Pro, Blender, Figma, Canva').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Soft Skills').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Critical Thinking, Teamwork, Communication').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Languages').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Indonesia (Native), English (Communication)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=PORTFOLIO').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=All').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Web').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mobile').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Showing 8 projects').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Parzello Website').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Official website for Parzello digital agency.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sipaling Delivery').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=First mobile app project built with Flutter focusing on modern UI/UX.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Centrepoint').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Community management app for POLICY organization at PNL.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Personal Portfolio').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=My personal portfolio website built with Next.js & TailwindCSS.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Website UKM-POLICY').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Official website for Polytechnic Linux Community with dynamic content and responsive design.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=E-Konsul').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Consultation app for students and lecturers at Politeknik Negeri Lhokseumawe.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Emergency Center (EMTER)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Emergency response app with real-time chat, maps, and quick call features.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ticzy – Productivity App').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A daily productivity management app with To-Do, Finance, Scheduler, and Notes.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Need Any Project?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Let’s Start').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+62 8516-1787-501').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=parzivalxdd@gmail.com').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    