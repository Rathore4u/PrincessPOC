package step_definitions;

import java.io.File;
import java.net.MalformedURLException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public static WebDriver driver;

	@Before("@web,~@api")
	/**
	 * Delete all cookies at the start of each scenario to avoid shared state
	 * between tests
	 */
	public void openBrowser() throws MalformedURLException, InterruptedException {
		System.out.println("Called openBrowser");
		driver=initDriver("chrome");
	}

	public WebDriver initDriver(String browserName) throws InterruptedException {
		if (browserName.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", "C:\\XebiaPoc\\tools\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();
			//Thread.sleep(5000l);
			return driver;
		} else if (browserName.equals("fireFox")) {
			DesiredCapabilities capabilities = DesiredCapabilities.firefox();
			capabilities.setCapability("marionette", true);
			System.setProperty("webdriver.gecko.driver","C:\\XebiaPoc\\tools\\geckodriver.exe");
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
			return driver;
		} else if (browserName.equals("ie")) {
			
			//File file = new File("C:\\XebiaPoc\\tools\\MicrosoftWebDriver.exe");
		   // System.setProperty("webdriver.edge.driver", file.getAbsolutePath());
		    //DesiredCapabilities capabilities = DesiredCapabilities.edge();
		    //driver = new EdgeDriver(capabilities);
			DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
			capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,true);
			System.setProperty("webdriver.ie.driver", new File("").getAbsolutePath() + "\\IEDriverServer.exe");
			driver = new InternetExplorerDriver(capabilities);
			driver.manage().window().maximize();
			return driver;
		} else
			return null;
	}

	@After("@web,~@api")
	/**
	 * Embed a screenshot in test report if test is marked as failed
	 */
	public void embedScreenshot(Scenario scenario) {

		if (scenario.isFailed()) {
			try {
				scenario.write("Current Page URL is " + driver.getCurrentUrl());
				// byte[] screenshot = getScreenshotAs(OutputType.BYTES);
				byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				System.err.println(somePlatformsDontSupportScreenshots.getMessage());
			}

		}
		driver.quit();

	}

}