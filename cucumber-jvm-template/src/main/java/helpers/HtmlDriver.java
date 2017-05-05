package helpers;

import org.openqa.selenium.htmlunit.HtmlUnitDriver;

/**
 * 
 * @author mrathore
 * 
 */

class HtmlDriver {

	/**
	 * 
	 * @return
	 */

	protected HtmlUnitDriver getDriverInstance() {
		HtmlUnitDriver htmlUnitDriver = new HtmlUnitDriver(true);
		return htmlUnitDriver;
	}
}