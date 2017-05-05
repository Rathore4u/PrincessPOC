package helpers;

import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;

/**
 * 
 * @author mrathore
 * 
 */

class FireFoxDriver {

	/**
	 * 
	 * @return
	 */
	protected FirefoxDriver getDriverInstance() {
		FirefoxProfile fp = new FirefoxProfile();
		fp.setPreference("network.proxy.type", 0);
		FirefoxDriver firefoxDriver = new FirefoxDriver(fp);
		firefoxDriver.manage().window().maximize();
		return firefoxDriver;
	}
}