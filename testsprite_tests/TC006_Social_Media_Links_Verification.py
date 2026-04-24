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
        # -> Click each social media link to verify they open the correct profiles in new tabs.
        frame = context.pages[-1]
        # Click LinkedIn social media link
        elem = frame.locator('xpath=html/body/div[2]/div/main/div/div/div[2]/section/div/div[3]/div/div/a/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Switch to the main portfolio tab (localhost:3000) to continue testing GitHub and Instagram links.
        frame = context.pages[-1]
        # Switch to main portfolio tab by clicking the localhost:3000 tab
        elem = frame.locator('xpath=html/body/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Switch back to the main portfolio tab (localhost:3000) and click the GitHub social media link to verify it opens the correct profile in a new tab.
        frame = context.pages[-1]
        # Switch to main portfolio tab at localhost:3000 to continue testing GitHub link
        elem = frame.locator('xpath=html/body/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=LinkedIn').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Join LinkedIn').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Email').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Password (6+ characters)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Agree & Join').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Already on Linkedin? Sign in').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sign in').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LinkedIn is better on the app').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Don’t have the app? Get it in the Microsoft Store.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Open the app').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Accessibility').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=User Agreement').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Privacy Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cookie Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Copyright Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Brand Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Guest Controls').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Community Guidelines').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Language').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    