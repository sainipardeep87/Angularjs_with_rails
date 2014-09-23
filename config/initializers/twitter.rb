require 'twitter'

$client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "JZV37ocBVJv1PPL8Epu9lDr5r"
  config.consumer_secret     = "7YPmcFfncR4sRDMhrrFz13SQbW8kkcd4FFaOkUIbWNsXIM8IL0"
  config.access_token        = "71751368-aBWNw4RLYa0d6Ts4vojeYEC5GSB9v75XQGoICJZ1D"
  config.access_token_secret = "FfbUWfyUPggvizmelsk75HoKJaXxiTQx9B1XjlU658ARX"
end