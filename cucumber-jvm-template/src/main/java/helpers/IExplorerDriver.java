package helpers;
import java.io.File;
import org.openqa.selenium.ie.InternetExplorerDriver;

/**
 * 
 * @author mrathore
 * 
 */

class IExplorerDriver {

	/**
	 * 
	 * @return
	 */
	protected InternetExplorerDriver getDriverInstance() {
	System.setProperty("webdriver.ie.driver", new File("").getAbsolutePath() + "\\IEDriverServer.exe");
		InternetExplorerDriver internetExplorerDriver = new InternetExplorerDriver();
		internetExplorerDriver.manage().window().maximize();
		return internetExplorerDriver;
	}
}