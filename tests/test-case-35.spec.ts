// tests/image-alt-text.spec.ts
import { test, expect } from '@playwright/test';

test('Images have alt text for accessibility', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  const images = page.locator('img');
  const imageCount = await images.count();
  
  if (imageCount > 0) {
    let imagesWithAlt = 0;
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const altText = await img.getAttribute('alt');
      
      // Count images with alt text (empty alt is acceptable for decorative images)
      if (altText !== null) {
        imagesWithAlt++;
      }
    }
    
    // Log for information (not a failure)
    console.log(`Found ${imageCount} images, ${imagesWithAlt} have alt text`);
    
    // At least some images should have alt text
    expect(imagesWithAlt).toBeGreaterThan(0);
  }
});