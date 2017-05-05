package helpers;

import java.io.File;

import org.openqa.selenium.chrome.ChromeDriver;

/**
 * 
 * @author mrathore
 * 
 */

class GoogleChromeDriver {

	/**
	 * 
	 * @return
	 */

	protected ChromeDriver getDriverInstance() {
		System.setProperty("webdriver.chrome.driver", new File("").getAbsolutePath() + "\\chromedriver.exe");
		ChromeDriver chromeDriver = new ChromeDriver();
		chromeDriver.manage().window().maximize();
		return chromeDriver;
	}
}