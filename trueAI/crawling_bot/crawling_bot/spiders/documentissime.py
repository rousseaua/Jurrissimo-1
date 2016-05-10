# -*- coding: utf-8 -*-
import scrapy


class DocumentissimeSpider(scrapy.Spider):
    name = "documentissime"
    allowed_domains = ["http://www.documentissime.fr/questions-droit/"]
    start_urls = (
        'http://www.http://www.documentissime.fr/questions-droit//',
    )

    def parse(self, response):
        pass
