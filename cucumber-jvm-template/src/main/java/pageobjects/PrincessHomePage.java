package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PrincessHomePage extends BaseClass {

	public PrincessHomePage(WebDriver driver) {
		super(driver);
	}

	public static class HeaderPage {

		@FindBy(how = How.LINK_TEXT, using = "Sign in")
		public static WebElement sign_in;

		// dressing up basic page elements
		public static class DressesPage {

			@FindBy(how = How.LINK_TEXT, using = "Register")
			public static WebElement register;

			@FindBy(how = How.ID, using = "headerbar-site-search-btn")
			public static WebElement search;
		}

		// methods to interact with page elements goes here

	}

}
