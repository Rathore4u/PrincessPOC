package pageobjects;

import org.openqa.selenium.WebDriver;

// Base Class is parent class for all Page Objects and this will contain common methods used across pages
// as well as initialization of drivers and other before/after suite code

public abstract class BaseClass {
	public static WebDriver driver;
	public static boolean bResult;

	public BaseClass(WebDriver driver) {
		BaseClass.driver = driver;
		BaseClass.bResult = true;
	}

}
