package helpers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

/**
 * 
 * @author mrathore
 * 
 */
public class SharedDriver extends EventFiringWebDriver {

	public SharedDriver(WebDriver driver) {
		super(driver);
	}
}