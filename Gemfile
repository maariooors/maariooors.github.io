source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "jekyll-theme-chirpy"

# Para `jekyll serve` en Ruby 3+
gem "webrick"

group :test do
  gem "html-proofer", "~> 5.0"
end

platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", platforms: [:windows]
