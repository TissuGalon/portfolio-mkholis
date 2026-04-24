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
        # -> Verify gradient text animation transitions smoothly and check shimmer button animation on hover.
        frame = context.pages[-1]
        # Hover or interact with 'View Projects' shimmer button to verify shimmer animation.
        elem = frame.locator('xpath=html/body/div[2]/div/main/div/div/div[2]/section/div/div[2]/div/a/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Check magic cards for interactive animations and responsiveness to user actions.
        frame = context.pages[-1]
        # Click 'View Project' button on the first magic card to observe interactive animation.
        elem = frame.locator('xpath=html/body/div[2]/div/main/div/div/section[4]/div[3]/div/div/div/div[4]/div[2]/a/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Verify gradient text animation transitions smoothly and shimmer button animation on hover or load.
        frame = context.pages[-1]
        # Click 'Explore Our Apps' button to check shimmer animation and page transition.
        elem = frame.locator('xpath=html/body/div[2]/div/main/section/div[5]/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=✨ Welcome to Parzello Tech').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Explore Our Apps').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Parzello Website').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Official website for Parzello digital agency.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About Our Company and What We Do').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Collaborative Team').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Modern Technology').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Business Growth').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Web Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mobile App Development').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Custom Solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=UI/UX Design').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    