import Link from 'next/link';
import React from 'react';
import { GithubIcon, InstagramIcon, LinkedInIcon, MailIcon, XIcon } from '@/assets/svg';

export const Footer = (): React.JSX.Element => {
    return (
        <footer className="bg-surface-footer px-[clamp(1rem,10rem,15rem)] py-20 sticky bottom-0">
            <section className="flex flex-col gap-20 lg:flex-row justify-between items-center">
                {' '}
                <div className="">
                    <h1 className="text-heading-md md:text-heading-xl font-bold text-foreground-primary mb-3">
                        Eventify{' '}
                        <span className="text-primary text-heading-xl md:text-heading-2xl">.</span>
                    </h1>
                    <p className="text-foreground-primary text-caption-sm sm:text-caption-md md:text-body-sm font-normal mb-6 whitespace-nowrap">
                        Let’s make web experiences better, faster, and more meaningful.
                    </p>

                    <div className="flex gap-3 mb-3">
                        <MailIcon size={18} className="cursor-pointer" />
                        <InstagramIcon size={18} className="cursor-pointer" />
                        <XIcon size={18} className="cursor-pointer" />
                        <LinkedInIcon size={18} className="cursor-pointer" />
                        <GithubIcon size={18} className="cursor-pointer" />
                    </div>

                    <div className="text-caption-sm md:text-caption-md flex font-normal text-foreground-secondary gap-2">
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Home
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            About
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Projects
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Tasks
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Portfolio
                        </Link>
                    </div>
                </div>
                <div className="flex gap-10 md:gap-16 lg:gap-20 self-center md:self-start">
                    <div className="text-caption-sm md:text-caption-md flex flex-col font-normal text-foreground-secondary gap-2">
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Home
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            About
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Case Studies
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Projects
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Careers
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Insights
                        </Link>
                    </div>

                    <div className="text-caption-sm md:text-caption-md flex flex-col font-normal text-foreground-secondary gap-2">
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Events
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Discover
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Community
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Highlights
                        </Link>
                    </div>

                    <div className="text-caption-sm md:text-caption-md flex flex-col font-normal text-foreground-secondary gap-2">
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Portfolio
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Work
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Experiences
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Skills
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Journey
                        </Link>
                    </div>

                    <div className="text-caption-sm md:text-caption-md flex flex-col font-normal text-foreground-secondary gap-2">
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            About
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Contact
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Support
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Resources
                        </Link>
                        <Link className="cursor-pointer hover:text-foreground-primary" href="#">
                            Documentation
                        </Link>
                    </div>
                </div>
            </section>
            <p className="text-caption-sm text-foreground-secondary mt-10 text-center">
                © {new Date().getFullYear()} All rights reserved — Shayan Bukhari
            </p>
        </footer>
    );
};
