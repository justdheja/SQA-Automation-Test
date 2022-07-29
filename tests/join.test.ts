import { test, expect, Page } from '@playwright/test';

test.describe.serial('Join Cermati', () => {
	let page: Page;
	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();

		await page.goto('https://www.cermati.com/gabung');
	});

	test('Enter Cermati Register Page', async () => {
		await page.waitForTimeout(1000);
		await expect(page.locator(`//h1[text()='Daftar Akun']`)).toBeVisible();
	});

	test('Fill Required Form', async () => {
		await page.type(
			`//input[@placeholder='Masukkan Email']`,
			'dummyemailjohndoe@gmail.com'
		);
		await page.type(
			`//input[@placeholder='Masukkan No. Handphone']`,
			'085142456789'
		);
		await page.type(
			`(//input[@placeholder='Masukkan Kata Sandi'])[1]`,
			'ValidPassword123'
		);
		await page.type(
			`(//input[@placeholder='Masukkan Kata Sandi'])[2]`,
			'ValidPassword123'
		);
		await page.type(`//input[@placeholder='Masukkan Nama Depan']`, 'John');
		await page.type(`//input[@placeholder='Masukkan Nama Belakang']`, 'Doe');
		await page.type(`//input[@placeholder='Pilih Kabupaten/Kota']`, 'sleman');
		await page.waitForTimeout(1000);
		await page.click(`//button[text()='KABUPATEN SLEMAN']`);
		await page.click(`//button[@data-button-name='register-new']`);
		await page.waitForTimeout(5000);
		await expect(
			page.locator(`//h1[text()='Verifikasi No. Handphone']`)
		).toBeVisible();
	});
});
