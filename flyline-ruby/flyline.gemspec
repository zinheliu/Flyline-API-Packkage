# frozen_string_literal: true

require_relative "lib/flyline/version"

Gem::Specification.new do |spec|
  spec.name          = "flyline"
  spec.version       = "1.0.0"
  spec.authors       = ["flyline"]
  spec.email         = ["development@flyline.io"]

  spec.summary       = "Travel Tech Simplified & Modernized"
  spec.description   = "We provide a modern and simple product suite to access rich content, real-time pricing, flight availability, and much more from all major airlines."
  spec.homepage      = "https://staging.flyline.io"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.4.0")

 

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/Flyline-Development/flyline_ruby.git"
  spec.metadata["changelog_uri"] = "https://github.com/FlyLine-Development/flyline_ruby/issues"

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{\A(?:test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # Uncomment to register a new dependency of your gem
  # spec.add_dependency "example-gem", "~> 1.0"

  # For more information and examples about making a new gem, checkout our
  # guide at: https://bundler.io/guides/creating_gem.html
end
